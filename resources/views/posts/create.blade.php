@extends('layouts.app')

@section('titulo')
    Crea una nueva publicación
@endsection

@push('styles')

<link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />

@endpush

@section('contenido')
<div class="md:flex md:items-center">
    <div class="md:w-6/12 p-2">
        <form action="{{ route('imagenes.store') }}" enctype="multipart/" class="dropzone border-dashed border-2 w-full h-96 roudend flex flex-col justify-center items-center" id="dropzone">
            @csrf
        </form>
        
    </div>
    <div class="md:w-6/12 p-6 rounded-lg bg-white shadow-lg">
        <form action="{{ route('posts.store') }}" method="POST">
            @csrf
            <div class="mb-5">
                <label for="titulo" class="mb-2 block uppercase text-gray-500 font-bold">
                    Titulo
                </label>
                <input
                type="text"
                id="titulo"
                name="titulo"
                class="border p-3 w-full rounded-lg @error('titulo') border-red-500 @enderror "

                placeholder="Titulo"
                >
                @error('titulo')

                <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                @enderror
            </div>
            <div class="mb-5">
                <label for="descripcion" class="mb-2 block uppercase text-gray-500 font-bold">
                    Descripcion
                </label>
                <textarea
                id="descripcion"
                name="descripcion"
                class="border p-3 w-full rounded-lg @error('descripcion') border-red-500 @enderror "

                placeholder="Descripcion"
                ></textarea>
                @error('descripcion')

                <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-5">
                <input type="hidden" name="imagen" value="{{ old('imagen') }}">
                @error('imagen')

                <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                @enderror
            </div>

            <button type="submit" class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Publicar</button>
        </form>
    </div>
    
</div>
@endsection