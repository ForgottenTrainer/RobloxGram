@extends('layouts.app')

@section('titulo')
Registrate
@endsection

@section('contenido')

    <div class="md:flex md:justify-center md:gap-10 md:items-center ">
        <div class="md:w-6/12 p-5">
            <img class="rounded" src="{{ asset('img/register.svg') }}" alt="Registro usuario">
        </div>
        <div class="md:w-4/12 bg-white p-6 rounded-lg shadow-lg">
            <form action="{{ route('register') }}" method="POST">
                @csrf
                <div class="mb-5">
                    <label for="name" class="mb-2 block uppercase text-gray-500 font-bold">
                        Nombre
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    class="border p-3 w-full rounded-lg @error('name') border-red-500 @enderror "

                    placeholder="Tu nombre"
                    >
                    @error('name')

                    <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-5">
                    <label for="username" class="mb-2 block uppercase text-gray-500 font-bold">
                        Username
                    </label>
                    <input type="text" id="username" name="username" placeholder="Elige tu nickname" class="border p-3 w-full rounded-lg @error('name') border-red-500 @enderror ">
                    @error('username')

                    <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-5">
                    <label for="Email" class="mb-2 block uppercase text-gray-500 font-bold">
                        Email
                    </label>
                    <input type="email" id="email" name="email" placeholder="ejemplo@ejemplo.com" class="border p-3 w-full rounded-lg @error('name') border-red-500 @enderror ">
                    @error('email')

                    <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                    @enderror
                </div>

                <div class="mb-5">
                    <label for="password_confirmation" class="mb-2 block uppercase text-gray-500 font-bold">
                        Contraseña
                    </label>
                    <input type="password" id="password" name="password" placeholder="Repite tu contraseña" class="border p-3 w-full rounded-lg @error('name') border-red-500 @enderror ">
                    @error('password')

                    <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-5">
                    <label for="username" class="mb-2 block uppercase text-gray-500 font-bold">
                        Repetir contraseña
                    </label>
                    <input type="text" id="password_confirmation" name="password_confirmation" placeholder="Repite tu contraseña" class="border p-3 w-full rounded-lg">
                </div>
                <button type="submit" class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enviar</button>
            
            </form>
        </div>
    </div>
@endsection
