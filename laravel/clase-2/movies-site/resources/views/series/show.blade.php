@extends('layouts.app')

@section('title', 'Movies Site')

@section('content')

    <h2>{{ $series->title }}</h2>
    <hr>
    <p><strong>Fecha de estreno</strong> {{ $series->release_date }}</p>

@endsection
