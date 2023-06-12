@extends('layouts.app')

@section('titulo')
    Edita tu perfil: {{ auth()->user()->username }} 
@endsection

@section('contenido')

<div class="container">
    <h2 class="text-gray-500 text-center text-xl font-bold uppercase">Formulario</h2>
    <div class="min-h-screen py-32 px-10">
        <div class="bg-white p-10 md:w-1/2 lg:w-2/3 mx-auto shadow-md">
          <form action="{{ route('perfil.store', auth()->user()->username) }}" enctype="multipart/form-data" method="POST">
            @csrf
            <div class="flex items-center mb-5">
              <label for="username" class="inline-block text-right mr-6 w-20 text-gray-500 font-bold">Username</label>
              <input value="{{ auth()->user()->username }}" type="text" name="username" id="name" placeholder="Tu username" class="p-2 border-b-2 border-gray-400 focus:border-green-400 flex-1 py-2 placeholder-gray-300 outline-none">
              @error('username')
              <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
              @enderror
            </div> 
      
            <div class="flex items-center mb-10">
              <label for="imagen" class="inline-block text-left mr-6 w-20 text-gray-500 font-bold">Imagen</label>
              <input type="file" accept=".jpg, .png, .jpeg" name="imagen" id="imagen" placeholder="@chrisoncode" class="border-b-2 border-gray-400 p-2 flex-1 py-2 placeholder-gray-300 focus:border-green-400 outline-none">
            </div>
            
            <div class="flex items-center mb-5">
              <label for="email" class="inline-block text-left mr-6 w-20 text-gray-500 font-bold">Correo</label>
              <input value="{{ auth()->user()->email }}" type="text" name="email" id="email" placeholder="Tu email" class="p-2 border-b-2 border-gray-400 focus:border-green-400 flex-1 py-2 placeholder-gray-300 outline-none">
              @error('email')
              <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
              @enderror
            </div>
            
            <!-- Cambiar contraseña -->
            <a href="{{ route('change.index', auth()->user()->username) }}" class="font-bold uppercase bg-blue-500 p-2 rounded text-white transition-colors duration-300 ease-in-out hover:bg-blue-300 hover:text-black" >
                Cambiar contraseña
            </a>
            
            <div class="text-center">
                <button class="bg-purple-500 px-4 py-2 mx-auto mt-3 text-white uppercase rounded font-bold">Guardar cambios</button>
            </div>
              
            
          </form>
        </div>
      </div>
      
    </div>
</div>

@endsection