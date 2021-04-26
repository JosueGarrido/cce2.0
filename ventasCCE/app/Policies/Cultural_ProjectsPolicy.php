<?php

namespace App\Policies;

use App\Cultural_Projects;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class Cultural_ProjectsPolicy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any cultural_ projects.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the cultural_ projects.
     *
     * @param  \App\User  $user
     * @param  \App\Cultural_Projects  $culturalProjects
     * @return mixed
     */
    public function view(User $user, Cultural_Projects $culturalProjects)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create cultural_ projects.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the cultural_ projects.
     *
     * @param  \App\User  $user
     * @param  \App\Cultural_Projects  $culturalProjects
     * @return mixed
     */
    public function update(User $user, Cultural_Projects $culturalProjects)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $culturalProjects->user_id;
    }

    /**
     * Determine whether the user can delete the cultural_ projects.
     *
     * @param  \App\User  $user
     * @param  \App\Cultural_Projects  $culturalProjects
     * @return mixed
     */
    public function delete(User $user, Cultural_Projects $culturalProjects)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the cultural_ projects.
     *
     * @param  \App\User  $user
     * @param  \App\Cultural_Projects  $culturalProjects
     * @return mixed
     */
    public function restore(User $user, Cultural_Projects $culturalProjects)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the cultural_ projects.
     *
     * @param  \App\User  $user
     * @param  \App\Cultural_Projects  $culturalProjects
     * @return mixed
     */
    public function forceDelete(User $user, Cultural_Projects $culturalProjects)
    {
        //
    }
}
