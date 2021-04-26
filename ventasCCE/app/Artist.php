<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['culture','disability','stage_name','field_cultural','main_activity','secondary_activity','education_level',
        'career_name','studies_institution','social_networks'
        ];
        public $timestamps = false;
        public function user(){
            return $this->morphOne('App\User', 'userable');
        }


}
