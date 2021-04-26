<?php

namespace App\Policies;

use App\CategoryLevel4;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryLevel4Policy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any category level4s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the category level4.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel4  $categoryLevel4
     * @return mixed
     */
    public function view(User $user, CategoryLevel4 $categoryLevel4)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create category level4s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the category level4.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel4  $categoryLevel4
     * @return mixed
     */
    public function update(User $user, CategoryLevel4 $categoryLevel4)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $categoryLevel4->user_id;
    }

    /**
     * Determine whether the user can delete the category level4.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel4  $categoryLevel4
     * @return mixed
     */
    public function delete(User $user, CategoryLevel4 $categoryLevel4)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the category level4.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel4  $categoryLevel4
     * @return mixed
     */
    public function restore(User $user, CategoryLevel4 $categoryLevel4)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the category level4.
     *
     * @param  \App\User  $user
     * @param  \App\CategoryLevel4  $categoryLevel4
     * @return mixed
     */
    public function forceDelete(User $user, CategoryLevel4 $categoryLevel4)
    {
        //
    }
}
