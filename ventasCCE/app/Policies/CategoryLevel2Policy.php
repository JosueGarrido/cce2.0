<?php

namespace App\Policies;

use App\CategoryLevel2;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryLevel2Policy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }
    /**
     * Determine whether the user can view any category level2s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the category level2.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return mixed
     */
    public function view(User $user, CategoryLevel2 $categoryLevel2)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create category level2s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the category level2.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return mixed
     */
    public function update(User $user, CategoryLevel2 $categoryLevel2)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $categoryLevel2->user_id;
    }

    /**
     * Determine whether the user can delete the category level2.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return mixed
     */
    public function delete(User $user, CategoryLevel2 $categoryLevel2)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the category level2.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return mixed
     */
    public function restore(User $user, CategoryLevel2 $categoryLevel2)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the category level2.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return mixed
     */
    public function forceDelete(User $user, CategoryLevel2 $categoryLevel2)
    {
        //
    }
}
