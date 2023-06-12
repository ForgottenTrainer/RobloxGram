<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ChangePasswordController extends Controller
{
    public function index()
    {
        return view('perfil.password');
    }

    public function store(Request $request)
    {
        $usuario = User::find(auth()->user()->id);

        $request->validate([
            'OldPass' => [
                'required',
                function ($attribute, $value, $fail) {
                    if (!Hash::check($value, auth()->user()->password)) {
                        $fail('La contraseña anterior no coincide.');
                    }
                },
            ],
            'NewPass' => 'required|min:6',
        ], [
            'OldPass.required' => 'Por favor, ingresa tu contraseña anterior.',
            'NewPass.required' => 'Por favor, ingresa tu nueva contraseña.',
            'NewPass.min' => 'La nueva contraseña debe tener al menos 6 caracteres.',
        ]);
    
        if (Hash::check($request->OldPass, $usuario->password)) {
            $usuario->password = Hash::make($request->NewPass);
            $usuario->save();
    
            return redirect()->route('posts.index', ['user' => auth()->user()->username]);
        } else {
            return redirect()->back()->with('error', 'La contraseña anterior no coincide.');
        }
    }
}
