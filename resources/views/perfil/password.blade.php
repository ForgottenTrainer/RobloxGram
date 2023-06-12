@extends('layouts.app')

@section('titulo')
Cambiar contraseña
@endsection

@section('contenido')
    
<div class="container">
    <h2 class="text-gray-500 text-center text-xl font-bold uppercase">Cambia tu contraseña {{ auth()->user()->username }}</h2>
    <div class="min-h-screen py-32 px-10">
        <div class="bg-white p-10 md:w-1/2 lg:w-2/3 mx-auto shadow-md">
          <form action="{{ route('change.store', auth()->user()->username) }}" method="POST">
            @csrf
            <div class="flex items-center mb-5">
              <label for="username" class="inline-block text-right mr-6 w-20 text-gray-500 font-bold">Contraseña antigua</label>
              <input type="password" name="OldPass" id="OldPass" placeholder="Contraseña Vieja" class="p-2 border-b-2 border-gray-400 focus:border-green-400 flex-1 py-2 placeholder-gray-300 outline-none">
              @error('OldPass')
              <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
              @enderror
            </div> 
            <div class="flex items-center mb-5">
                <label for="username" class="inline-block text-right mr-6 w-20 text-gray-500 font-bold">Contraseña Nueva</label>
                <input type="password" name="NewPass" id="NewPass" placeholder="Contraseña Nueva" class="p-2 border-b-2 border-gray-400 focus:border-green-400 flex-1 py-2 placeholder-gray-300 outline-none">
                @error('NewPass')
                <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                @enderror
            </div> 
            <div class="text-center">
                <button class="bg-purple-500 px-4 py-2 mx-auto mt-3 text-white uppercase rounded font-bold">Guardar cambios</button>
            </div>
              
            
          </form>
        </div>
      </div>
      
    </div>
</div>
@endsection