<?php

namespace App\Policies;

use App\Recognition;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RecognitionPolicy
{
    use HandlesAuthorization;

    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }
    /**
     * Determine whether the user can view any recognitions.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the recognition.
     *
     * @param  \App\User  $user
     * @param  \App\Recognition  $recognition
     * @return mixed
     */
    public function view(User $user, Recognition $recognition)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create recognitions.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the recognition.
     *
     * @param  \App\User  $user
     * @param  \App\Recognition  $recognition
     * @return mixed
     */
    public function update(User $user, Recognition $recognition)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $recognition->user_id;
    }

    /**
     * Determine whether the user can delete the recognition.
     *
     * @param  \App\User  $user
     * @param  \App\Recognition  $recognition
     * @return mixed
     */
    public function delete(User $user, Recognition $recognition)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the recognition.
     *
     * @param  \App\User  $user
     * @param  \App\Recognition  $recognition
     * @return mixed
     */
    public function restore(User $user, Recognition $recognition)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the recognition.
     *
     * @param  \App\User  $user
     * @param  \App\Recognition  $recognition
     * @return mixed
     */
    public function forceDelete(User $user, Recognition $recognition)
    {
        //
    }
}
