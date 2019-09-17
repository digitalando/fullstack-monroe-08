<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    protected $table = 'actors';

    protected $fillable = ['first_name', 'last_name', 'rating', 'favorite_movie_id'];

    public function fullName() {
        return $this->first_name . ' ' . $this->last_name;
    }
}
