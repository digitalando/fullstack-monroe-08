<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $table = 'movies';

    protected $fillable = ['title',  'rating', 'awards', 'release_date', 'length', 'genre_id'];

    protected $hidden = ['genre_id'];

    protected $perPage = 9;

    public function genre() {
      return $this->belongsTo(Genre::class);
    }

    public function actors() {
      return $this->belongsToMany(Actor::class);
    }
}
