@extends('layouts.app')

@section('title', 'Movies Site')

@section('content')
    <h2>Listado de películas</h2>
    <div class="">
      <div class="row">

      @foreach ($movies as $movie)
        <div class="col-4">
          <a href="{{ route('movies.show', $movie->id) }}">
            <div class="card">
              <p><strong>Título</strong> {{ $movie->title }}</p>
              <p><strong>Rating</strong> {{ $movie->rating }}</p>
              <p><strong>Premios</strong> {{ $movie->awards }}</p>
              <p><strong>Fecha de estreno</strong> {{ $movie->release_date }}</p>
            </div>
          </a>
        </div>
      @endforeach
      </div>
    </div>
    {{ $movies->links() }}
@endsection
