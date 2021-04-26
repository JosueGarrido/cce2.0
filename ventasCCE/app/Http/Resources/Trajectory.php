<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Trajectory extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array

     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'star_date' => $this ->star_date,
            'trajectory_description' => $this ->trajectory_description,
            'user_id' => $this ->user_id,

        ];
    }
}
