<?php

namespace App\Policies;

use App\CategoryLevel3;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryLevel3Policy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any category level3s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the category level3.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel3  $categoryLevel3
     * @return mixed
     */
    public function view(User $user, CategoryLevel3 $categoryLevel3)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create category level3s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the category level3.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel3  $categoryLevel3
     * @return mixed
     */
    public function update(User $user, CategoryLevel3 $categoryLevel3)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $categoryLevel3->user_id;
    }

    /**
     * Determine whether the user can delete the category level3.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel3  $categoryLevel3
     * @return mixed
     */
    public function delete(User $user, CategoryLevel3 $categoryLevel3)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the category level3.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel3  $categoryLevel3
     * @return mixed
     */
    public function restore(User $user, CategoryLevel3 $categoryLevel3)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the category level3.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel3  $categoryLevel3
     * @return mixed
     */
    public function forceDelete(User $user, CategoryLevel3 $categoryLevel3)
    {
        //
    }
}
