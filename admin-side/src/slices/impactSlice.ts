import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Iimpact } from '../interfaces/IImpact';

export const impactApi = createApi({
    reducerPath:'impacts',
    baseQuery: fetchBaseQuery({baseUrl:'https://uptech-agro.herokuapp.com/api/impact'}),
    tagTypes:['Impact'],
    endpoints: (build) => ({
        getImpacts: build.query<Iimpact[], string | void>({
            query(){
                return{
                    url:'/'
                }
            },
            providesTags: (result) =>  result ?  [...result.map(({ id }) => ({ type: 'Impact', id } as const)), { type: 'Impact', id: 'impact' }, ]: [{ type: 'Impact', id: 'impact' }],
        }),
        getImpact: build.query<Iimpact, string>({
            query(id:string){
                return{
                    url:`/${id}`
                }
            },
            providesTags:(result, error,id) => [{type:"Impact",id}]
        }),
        addImpact: build.mutation<Iimpact, FormData>({
            query(body){
                return{
                    url:'/',
                    method:'POST',
                    body,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                }
            },
            invalidatesTags:[{ type:'Impact', id:'impact'}]
        }),
        deleteImpact: build.mutation<{success:boolean; _id:string},string>({
            query(id){
                return{
                    url:`/${id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:[{type:'Impact', id:'impact'}]
        }),
        editImpact: build.mutation<Iimpact, FormData>({
            query(body){
                return{
                    url:`/${body.get('_id')}`,
                    method:'PUT',
                    body,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                }
            }
        }),
    })
})

export const { useAddImpactMutation, 
    useGetImpactQuery, 
    useDeleteImpactMutation, 
    useGetImpactsQuery,
    useEditImpactMutation
} = impactApi;