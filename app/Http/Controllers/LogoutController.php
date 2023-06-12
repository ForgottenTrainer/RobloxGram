<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    public function store()
    {
        # code...
        auth()->logout();

        return redirect()->route('login');
    }
}
