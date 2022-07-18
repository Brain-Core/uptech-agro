import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../interfaces/IUser';


export  const userApi = createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl:'https://uptech-agro.herokuapp.com/api/auth'}),
    tagTypes:['IUser'],
    endpoints: (build) => ({
        getUsers : build.query<IUser, string | void>({
            query(){
                return{
                    url:'/users'
                }
            },
            providesTags:(result) => [{type:"IUser"}]
        }),
        registerUser: build.mutation<IUser, Partial<IUser>>({
            query(body){
                return{
                    url:'/register',
                    method:"POST",
                    body
                }
            },
            invalidatesTags: [{type:'IUser',id:'user'}]
        }),
        loginUser: build.mutation<{userId: string, token: string}, Partial<{email: string, password: string}>>({
            query(body){
                return{
                    url:'/login',
                    method:"POST",
                    body
                }
            }
        })
    })
})


export const {
    useGetUsersQuery,
    useRegisterUserMutation,
    useLoginUserMutation
} = userApi;