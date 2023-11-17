import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then( () => {
                console.log('user profile updated')
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user created successfully',
                    showConfirmButton: false,
                    timer: 1500
                   
                  })
                  navigate('/');
            })
            .catch(error => console.log(error))
        })
    };
    //   console.log(watch("example"))
    return (
      <>
        <Helmet>
                <title>Bistro Boss | Sign Up</title>
               
            </Helmet>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="photoURL"  className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password", { required: true,
                                    
                                    minLength: 6,
                                     maxLength: 20,
                                     pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/ })} type="password" placeholder="password" className="input input-bordered" name="password" />
                                {errors.password?.type === "required" && (
                                    <p role="alert" className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert" className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert" className="text-red-600">Password must be maximum 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert" className="text-red-600">Password must have one upper , one lower and one special character </p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                        <p><small>already have an account? <Link to='/login'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default SignUp;