@extends('layouts.app')

@section('titulo')
{{ $post->titulo }}
@endsection


@section('contenido')

    <div class="container mx-auto md:flex">
        <div class="md:w-1/2">
            <img src="{{ asset('uploads').'/'.$post->imagen }}" class="rounded-md" alt="Imagen del usuario">
            <div class="p-3 pr-4 flex items-center">
                @auth

                @php
                    $post
                @endphp
                <livewire:like-post :post="$post" />

                
               @endauth
                
            </div>

            <div class="">
                <p class="font-bold"> {{ $post->user->username }} </p>
                <div class="text-sm text-gray-500">
                    {{ $post->created_at->diffForHumans() }}
                </div>
                <p class="mt-5">
                    {{ $post->descripcion }}
                </p>
            </div>

            @auth
            
                @if ($post->user_id === auth()->user()->id)
                    <form method="POST" action="{{ route('posts.destroy', $post->id) }}">
                        @method('DELETE')
                        @csrf
                        <br>
                        <button class="bg-red-500 uppercase hover:bg-red-600 p-2 rounded mt-4 text-white font-bold cursor-pointer" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                              
                        </button>
                    </form>                
                @endif
            @endauth

        </div>

        <div class="md:w-1/2 p-5">
            @auth

            @if (session('mensaje'))
                <div class="bg-green-500 p-2 rounded-lg mb-6 text-white text-center uppercase font-bold shadow-md">
                    {{ session('mensaje') }}
                </div>
            @endif

            <div class="shadow bg-white p-5 mb-5 rounded-md ">
                <p class="text-xl font-bold text-center mb-4">
                    Agrega un comentario
                </p>
                <form action="{{ route('comentarios.store',['post' => $post, 'user' => $user] ) }}" method="POST">
                    @csrf
                    <label for="descripcion" class="mb-2 block uppercase text-gray-500 font-bold">
                        Comentario
                    </label>
                    <textarea
                    id="comentario"
                    name="comentario"
                    class="border p-3 w-full rounded-lg @error('descripcion') border-red-500 @enderror "
    
                    placeholder="Agrega un comentario"
                    ></textarea>
                    @error('comentario')
    
                    <p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">{{ $message }}</p>
                    @enderror

                    <button type="submit" class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Publicar</button>
        
                </form>
                @endauth

                <div class="bg-white shadow mb-5 max-h-96 overflow-y-scroll mt-10">
                    @if ($post->comentario->count())
                        @foreach ( $post->comentario as $comentario)
                            <div class="p-5 border-gray-300 border-b">
                                <a class="text-purple-400 text-sm uppercase font-bold" href="{{ route('posts.index', $comentario->user->username) }}"> {{$comentario->user->username}} </a>
                                <p>{{ $comentario->comentario }}</p>
                                <p class="text-gray-400 text-sm" > {{ $comentario->created_at->diffForHumans() }} </p>
                            </div>
                        @endforeach
                    @else
                        <p class="p-10 text-center">
                            Sin comentarios
                        </p>
                    @endif
                </div>
            </div>
        </div>
    </div>

@endsection