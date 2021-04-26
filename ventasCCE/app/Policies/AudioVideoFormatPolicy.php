<?php

namespace App\Policies;

use App\AudioVideoFormat;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AudioVideoFormatPolicy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any audio video formats.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the audio video format.
     *
     * @param  \App\User  $user
     * @param  \App\AudioVideoFormat  $audioVideoFormat
     * @return mixed
     */
    public function view(User $user, AudioVideoFormat $audioVideoFormat)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create audio video formats.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the audio video format.
     *
     * @param  \App\User  $user
     * @param  \App\AudioVideoFormat  $audioVideoFormat
     * @return mixed
     */
    public function update(User $user, AudioVideoFormat $audioVideoFormat)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $audioVideoFormat->user_id;    }

    /**
     * Determine whether the user can delete the audio video format.
     *
     * @param  \App\User  $user
     * @param  \App\AudioVideoFormat  $audioVideoFormat
     * @return mixed
     */
    public function delete(User $user, AudioVideoFormat $audioVideoFormat)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the audio video format.
     *
     * @param  \App\User  $user
     * @param  \App\AudioVideoFormat  $audioVideoFormat
     * @return mixed
     */
    public function restore(User $user, AudioVideoFormat $audioVideoFormat)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the audio video format.
     *
     * @param  \App\User  $user
     * @param  \App\AudioVideoFormat  $audioVideoFormat
     * @return mixed
     */
    public function forceDelete(User $user, AudioVideoFormat $audioVideoFormat)
    {
        //
    }
}
