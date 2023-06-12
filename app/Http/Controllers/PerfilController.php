<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Validator;
use Illuminate\Validation\Rule;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Hash;

class PerfilController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    //
    public function index()
    {
        return view('perfil.index');
    }

    public function store(Request $request)
    {
        //Modificar slug

        $request->validate([
            // 'username' => 'required|unique:users|min:3|max:20'
            'username' => [
                'required', 
                // "unique:users,username,{auth()->user()->username}", 
                Rule::unique('users', 'username')->ignore(auth()->user()),
                'min:3', 
                'max:20', 
                'not_in:twitter,edita-perfil'
            ],
            'email' => [
                'required',
                Rule::unique('users', 'email')->ignore(auth()->user()),
                'email',
                'max:60',
            ]
        ]);

        if ($request->imagen)
        {
            $imagen = $request->file('imagen');
            $nombreImagen = Str::uuid(). "." . $imagen->extension();
            $imagenServidor = Image::make($imagen);
            $imagenServidor->fit(1000,1000);
    
            $imagenPath = public_path('perfiles') . '/' . $nombreImagen;
            $imagenServidor->save($imagenPath);
    
        } 

        //Guardar cambios
        $usuario = User::find(auth()->user()->id);
        $usuario->username = $request->username;
        $usuario->imagen = $nombreImagen ?? auth()->user()->imagen ?? null;
        $usuario->email = $request->email;
        $usuario->save();

        //Redireccionar
        return redirect()->route('posts.index', $usuario->username);
        
    }

    public function password(Request $request)
    {
        
        $user = auth()->user();
    
        if (Hash::check($request->OldPassword, $user->password)) {
            $user->password = Hash::make($request->NewPassword);
            $user->save();
            return redirect()->route('posts.index', $usuario->username);
        } else {
            // La contraseña anterior no coincide, maneja el error aquí
            return redirect()->back()->with('error', 'La contraseña anterior no coincide.');
        }
        
    }
}
