@extends('layouts.app')

@section('title', 'Movies Site')

@section('content')
    <h2>{{ $movie->title }}</h2>
    <hr>
    <p><strong>Título</strong> {{ $movie->title }}</p>
    <p><strong>Rating</strong> {{ $movie->rating }}</p>
    <p><strong>Premios</strong> {{ $movie->awards }}</p>

@endsection
