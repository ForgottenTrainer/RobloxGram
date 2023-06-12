<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class RegisterController extends Controller
{
    public function index ()
    {
        return view('auth.register');
    }

    public function store(Request $request)
    {
        //dd($request->get('name'));
        //Validacion

        //Modificar el request
        $request->request->add(['username' => Str::slug($request->username)]);

        $this->validate($request, [
            'name' => 'required|max:30',
            'username' => 'required|unique:users|min:5|max:20',
            'email' => 'required|unique:users|email|max:60',
            'password' => 'required|min:6|confirmed'
        ]);

        User::create([
            'name' => $request->name,
            'username'=> Str::slug($request->username),
            'email'=>$request->email,
            'password'=> Hash::make($request->password)
        ]);

        //autenticar usuario
        auth()->attempt([
            'email' => $request->email,
            'password' => $request->password
        ]);

        return redirect()->route('posts.index', ['user' => auth()->user()->username]);
    }
}
