<?php
namespace App\Http\Controllers;


//use App\Http\Resources\UserCollection;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;


class UserController extends Controller{

    private static $rules =[
        'name' => 'required|string|max:30',
        'lastname' => 'required|string|max:30',
        'email' => 'required',
        'password' => 'required',
        'identity' => 'required',
        'birthday' => 'required',
        'phone' => 'required',
        'profile_picture' => 'required|image|dimensions:min_width=200,min_height=200',
        'location' => 'required',
        'culture' => 'required',
        'stage_name' => 'required|unique:user',
        'shop_name' => 'required',
        'field_cultural' => 'required',
        'main_activity' => 'required',
        'education_level' => 'required',
    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];

    public function index()
    {
      // $this->authorize('viewAny', User::class);
        return User::all();
        //return new UserCollection(User::paginate (25));
    }
    public function show(User $user)
    {
        $this->authorize('view', $user);
        return response()->json( new UserResource($user), 200);
    }
    public function image(User $user)
    {
        return response()->download(public_path(Storage::url($user->profile_picture)), $user->name);
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['message' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['message' => 'could_not_create_token'], 500);
        }
        $user = JWTAuth::user();

        return response()->json(compact('token', 'user'));

    }


    public function register (Request $request)
    {

      //  $this->authorize('view', $id);
      //  return response()->json( new UserResource($id), 200);

      // $validator = Validator::make($request->all(), [

           $request->validate([
           'name' => 'required|string|max:30',
           'last_name' => 'required|string|max:30',
           'email' => 'required|string|unique:users|email|max:50',
           'email_verified_at' => 'required|string|unique:users|email|max:50',
           'password' => 'required|string|min:6|confirmed',
           'identity' => 'required',
           'birthday' => 'required',
           'phone' => 'required|integer|unique:users',
           'location' => 'required',
          /* 'culture' => 'required',
           'profile_picture' => 'image|dimensions:min_width=200,min_height=200',
           'country' => 'required',
           'culture' => 'required',
           'disability' => 'required',
           'shop_name' => 'required',
           'field_cultural' => 'required',
           'secondary_activity' => 'required',
           'education_level' => 'required',
           'career_name' => 'required',
           'studies_institution' => 'required',
           'social_networks' => 'required',*/
        ],self::$messages);

  /*      $user = User::create([
            'name' => $request->get('name'),
            'last_name' => $request->get('last_name'),
            'email' => $request->get('email'),
            'email_verified_at' => $request->get('email_verified_at'),
            'password' => Hash::make($request->get('password')),
            'identity' => $request->get('identity'),
            'birthday' => $request->get('birthday'),
            'phone' => $request->get('phone'),
            'profile_picture' => $request->get('profile_picture'),
            'location' => $request->get('location'),
           /* 'culture' => $request->get('culture'),
            'disability' => $request->get('disability'),
            'stage_name' => $request->get('stage_name'),
            'field_cultural' => $request->get('field_cultural'),
            'main_activity' => $request->get('main_activity'),
            'secondary_activity' => $request->get('secondary_activity'),
            'education_level' => $request->get('education_level'),
            'career_name' => $request->get('career_name'),
            'studies_institution' => $request->get('studies_institution'),
            'social_networks' => $request->get('social_networks'),
        ]); */


       // $token = JWTAuth::fromUser($user);  */

        $user = new User($request->all());
        $pass = $request->password;
        $user->password = Hash::make($pass);
        $path = $request->profile_picture->store('public/user');
        $user->profile_picture = 'user/' . basename($path);
        $user->save();
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token'),201);

    }



    public function registerClient (Request $request)
    {

        //  $this->authorize('view', $id);
        //  return response()->json( new UserResource($id), 200);

        // $validator = Validator::make($request->all(), [

        $request->validate([
            'name' => 'required|string|max:30',
            'last_name' => 'required|string|max:30',
            'email' => 'required|string|unique:users|email|max:50',
            'email_verified_at' => 'required|string|unique:users|email|max:50',
            'password' => 'required|string|min:6|confirmed',
            'identity' => 'required',
            'birthday' => 'required',
            'phone' => 'required|integer|unique:users',
            'location' => 'required',
            /* 'culture' => 'required',
             'profile_picture' => 'image|dimensions:min_width=200,min_height=200',
             'country' => 'required',
             'culture' => 'required',
             'disability' => 'required',
             'shop_name' => 'required',
             'field_cultural' => 'required',
             'secondary_activity' => 'required',
             'education_level' => 'required',
             'career_name' => 'required',
             'studies_institution' => 'required',
             'social_networks' => 'required',*/
        ],self::$messages);

        /*      $user = User::create([
                  'name' => $request->get('name'),
                  'last_name' => $request->get('last_name'),
                  'email' => $request->get('email'),
                  'email_verified_at' => $request->get('email_verified_at'),
                  'password' => Hash::make($request->get('password')),
                  'identity' => $request->get('identity'),
                  'birthday' => $request->get('birthday'),
                  'phone' => $request->get('phone'),
                  'profile_picture' => $request->get('profile_picture'),
                  'location' => $request->get('location'),
                 /* 'culture' => $request->get('culture'),
                  'disability' => $request->get('disability'),
                  'stage_name' => $request->get('stage_name'),
                  'field_cultural' => $request->get('field_cultural'),
                  'main_activity' => $request->get('main_activity'),
                  'secondary_activity' => $request->get('secondary_activity'),
                  'education_level' => $request->get('education_level'),
                  'career_name' => $request->get('career_name'),
                  'studies_institution' => $request->get('studies_institution'),
                  'social_networks' => $request->get('social_networks'),
              ]); */


        // $token = JWTAuth::fromUser($user);  */

        $user = new User($request->all());
        $pass = $request->password;
        $user->password = Hash::make($pass);
        $path = $request->profile_picture->store('public/user');
        $user->profile_picture = 'user/' . basename($path);
        $user->save();
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token'),201);

    }





    public function getAuthenticatedUser()
    {

       // $this->authorize('create', User::class);
     //   $request->validate(self::$rules,self::$messages);
      //  return User::create($request->all());

        try{
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['message' => 'user not found'], 404);
            }
        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json(['message' => 'token expired'], $e->getStatusCode());
        }catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['message' => 'token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['message' => 'token_absent'], $e->getStatusCode());
        }
        return response()->json(new UserResource($user), 200);

    }
    public function update(Request $request, $user)
    {
        $user = User::findOrFail($user);
        $user->update($request->all());
        return $user;
    }

    public function delete(Request $request, $user)
    {
        Schema::disableForeignKeyConstraints();
        $user = User::findOrFail($user);
        $user->delete();
        return 204;
        Schema::enableForeignKeyConstraints();

    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                "status" => "success",
                "message" => "User successfully logged out."
            ], 200);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(["message" => "No se pudo cerrar la sesión."], 500);
        }
    }
}
