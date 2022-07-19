import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProdcut } from '../interfaces/IProduct';


export const productApi = createApi({
    reducerPath:'product',
    baseQuery: fetchBaseQuery({baseUrl:'https://uptech-agro.herokuapp.com/api/products', headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }}),
    tagTypes:['IProduct'],
    endpoints: (build) => ({
        getProduct: build.query<IProdcut[], number | void>({
            query(){
                return {
                    url: '/'
                }
            },
            providesTags: (result) =>
        result
          ? 
            [
              ...result.map(({ _id }) => ({ type: 'IProduct', _id } as const)),
              { type: 'IProduct', id: 'LIST' },
            ]
          : 
            [{ type: 'IProduct', id: 'LIST' }],
        }),
        getOneProduct:build.query<IProdcut, string>({
          query(_id:string){
            return {
              url:`/${_id}`
            }
          },
          providesTags: (result, error, _id) => [{ type: 'IProduct', _id }],
        }),
        addProduct: build.mutation<IProdcut, Partial<IProdcut> | FormData>({
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
          invalidatesTags:[{type: 'IProduct', id:'LIST'}]
        }),
        editProduct: build.mutation<IProdcut,FormData & Pick<IProdcut,"_id"> >({
          query({_id,...body}){
        
            return{
              url: `/${_id}`,
              method:'PUT',
              body
            }
          },
          invalidatesTags:[{type: 'IProduct', id:'LIST'}]
        }),
        deleteProduct: build.mutation<{success:boolean; _id:string}, string>({
          query(_id){
            return {
              url:`/delete/${_id}`,
              method:'DELETE'
            }
          },
          invalidatesTags:['IProduct']
        })
    })
});


export const { 
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetOneProductQuery 
} = productApi;

