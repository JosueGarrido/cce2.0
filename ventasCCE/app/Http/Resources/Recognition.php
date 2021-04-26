<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Recognition extends JsonResource
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
            'reco_name' => $this ->reco_name,
            'reco_description' => $this ->reco_description,
            'reco_type' => $this ->reco_type,
            'reco_place' => $this ->reco_place,

        ];
    }
}
