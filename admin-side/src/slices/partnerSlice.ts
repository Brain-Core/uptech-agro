import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPartner } from '../interfaces/IPartner';


export const partnerApi = createApi({
    reducerPath:'partner',
    baseQuery: fetchBaseQuery({baseUrl:'https://uptech-agro.herokuapp.com/api/partner', headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }}),
    tagTypes:['IPartner'],
    endpoints: (build) => ({
        getPartners : build.query<IPartner[],string | void>({
            query(){
                return {
                    url:'/'
                }
            },
            providesTags: (result) =>  result ?  [...result.map(({ _id }) => ({ type: 'IPartner', _id } as const)), { type: 'IPartner', id: 'ORDER' }, ]: [{ type: 'IPartner', id: 'ORDER' }],
        }),
        getPartner: build.query<IPartner, string>({
            query(_id: string){
                return{
                    url: `/${_id}`
                }
            },
            providesTags:(result, error,_id) => [{type:"IPartner",_id}]
        }),
        addPartner: build.mutation<IPartner, FormData>({
            query(body){
                return{
                    url:'/',
                    method: 'POST',
                    body,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                }
            },
            invalidatesTags:[{type: 'IPartner', id:'ORDER'}]
        }),
        deletePartner: build.mutation<{success:boolean; _id:string}, string>({
            query(_id){
                return{
                    url:`/delete/${_id}`,
                    method:'DELETE'
                }
            },
            invalidatesTags:[{type: 'IPartner', id:'ORDER'}]
        }),
        editPartner: build.mutation<IPartner, FormData>({
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
        })
    })
});


export const { useGetPartnersQuery, useAddPartnerMutation,useDeletePartnerMutation,useGetPartnerQuery, useEditPartnerMutation } = partnerApi;

