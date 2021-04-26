<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'name' => $this ->name,
            'last_name' => $this ->last_name,
            'email' => $this ->email,
            'email_verified_at' => $this ->email_verified_at,
            'password' => $this ->password,
            'identity' => $this ->identity,
            'birthday' => $this ->birthday,
            'phone' => $this ->phone,
            'profile_picture' => $this ->profile_picture,
            'location' => $this ->location,
            'live' => $this -> live,
            'culture' => $this ->culture,
            'disability' => $this ->disability,
            'disability_porcentage' => $this ->disability,
            'stage_name' => $this ->stage_name,
            'shop_name' => $this ->shop_name,
            'field_cultural' => $this ->field_cultural,
            'secondary_activity' => $this ->secondary_activity,
            'education_level' => $this ->education_level,
            'career_name' => $this ->career_name,
            'studies_institution' => $this ->studies_institution,
            'social_networks' => $this ->social_networks,

        ];

    }
}
