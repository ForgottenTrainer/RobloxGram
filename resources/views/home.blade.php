
@extends('layouts.app')

@section('titulo')
RobloxGram
@endsection

@section('contenido')

    <x-listar-post :posts="$posts" />

@endsection