<?php

namespace App\Policies;

use App\User;
use App\Web_Links;
use Illuminate\Auth\Access\HandlesAuthorization;

class Web_LinksPolicy
{
    use HandlesAuthorization;
    public function before(User $user, $ability)
    {
        if ($user->isGranted(User::ROLE_SUPERADMIN)) {
            return true;
        }
    }
    /**
     * Determine whether the user can view any web_ links.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can view the web_ links.
     *
     * @param  \App\User  $user
     * @param  \App\Web_Links  $webLinks
     * @return mixed
     */
    public function view(User $user, Web_Links $webLinks)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can create web_ links.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isGranted(User::ROLE_USER);
    }

    /**
     * Determine whether the user can update the web_ links.
     *
     * @param  \App\User  $user
     * @param  \App\Web_Links  $webLinks
     * @return mixed
     */
    public function update(User $user, Web_Links $webLinks)
    {
        return $user->isGranted(User::ROLE_USER) && $user->id === $webLinks->user_id;
    }

    /**
     * Determine whether the user can delete the web_ links.
     *
     * @param  \App\User  $user
     * @param  \App\Web_Links  $webLinks
     * @return mixed
     */
    public function delete(User $user, Web_Links $webLinks)
    {
        return $user->isGranted(User::ROLE_ARTIST);
    }

    /**
     * Determine whether the user can restore the web_ links.
     *
     * @param  \App\User  $user
     * @param  \App\Web_Links  $webLinks
     * @return mixed
     */
    public function restore(User $user, Web_Links $webLinks)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the web_ links.
     *
     * @param  \App\User  $user
     * @param  \App\Web_Links  $webLinks
     * @return mixed
     */
    public function forceDelete(User $user, Web_Links $webLinks)
    {
        //
    }
}
