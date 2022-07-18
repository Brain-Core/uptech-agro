import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITeam } from '../interfaces/ITeam';


export const teamApi = createApi({
    reducerPath:'team',
    baseQuery: fetchBaseQuery({baseUrl:'https://uptech-agro.herokuapp.com/api/team'}),
    tagTypes:['ITeam'],
    endpoints: (build) => ({
        // FETCH ALL THE TEAM MEMBERS 
        getTeams: build.query<ITeam[], string | void>({
            query(){
                return{
                    url:'/'
                }
            },
            providesTags: (result) =>
        result
          ? 
            [
              ...result.map(({ id }) => ({ type: 'ITeam', id } as const)),
              { type: 'ITeam', id: 'TEAM' },
            ]
          : 
            [{ type: 'ITeam', id: 'TEAM' }],
        }),
        // ADD NEW TEAM MEMBER
        addTeam: build.mutation<ITeam, FormData>({
            query(body){
                return {
                    url:'/',
                    method:'POST',
                    body
                }
            },
            invalidatesTags: [{type:'ITeam',id:'TEAM'}]
        }),
        // REQUEST FOR GETTING ON TEAM MEMBER
        getTeam: build.query<ITeam, string>({
            query(_id: string){
                return{
                    url:`/${_id}`
                }
            }
        }),
        // DELETE ONE TEAM MEMBER HIS ID
        deleteTeam: build.mutation<{success:boolean, id:string}, string>({
            query(id){
                return{
                    url:`/delete/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags: [{type:'ITeam',id:'TEAM'}]
        })
    })
});

export const { useAddTeamMutation,useDeleteTeamMutation,useGetTeamQuery,useGetTeamsQuery } = teamApi;