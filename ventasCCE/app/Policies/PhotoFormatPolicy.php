<?php

namespace App\Policies;

use App\PhotoFormat;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PhotoFormatPolicy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any photo formats.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the photo format.
     *
     * @param  \App\User  $user
     * @param  \App\PhotoFormat  $photoFormat
     * @return mixed
     */
    public function view(User $user, PhotoFormat $photoFormat)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create photo formats.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the photo format.
     *
     * @param  \App\User  $user
     * @param  \App\PhotoFormat  $photoFormat
     * @return mixed
     */
    public function update(User $user, PhotoFormat $photoFormat)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $photoFormat->user_id;
    }

    /**
     * Determine whether the user can delete the photo format.
     *
     * @param  \App\User  $user
     * @param  \App\PhotoFormat  $photoFormat
     * @return mixed
     */
    public function delete(User $user, PhotoFormat $photoFormat)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the photo format.
     *
     * @param  \App\User  $user
     * @param  \App\PhotoFormat  $photoFormat
     * @return mixed
     */
    public function restore(User $user, PhotoFormat $photoFormat)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the photo format.
     *
     * @param  \App\User  $user
     * @param  \App\PhotoFormat  $photoFormat
     * @return mixed
     */
    public function forceDelete(User $user, PhotoFormat $photoFormat)
    {
        //
    }
}
