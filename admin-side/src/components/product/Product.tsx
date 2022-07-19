import './Product.css';
import { Link } from 'react-router-dom' 
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useGetProductQuery, useDeleteProductMutation } from '../../slices/productSlice';
import {Table} from 'antd';

function Product() {

    const [deteleProduct] = useDeleteProductMutation();
    const {data=[], isLoading} = useGetProductQuery();

    const columns = [
        {
            dataIndex:'_id',
            title:'ID',
            width:200
        },
        {
            dataIndex:'namep',
            title:'Name',
            width:200
        },
        {
            title:'Image',
            width: 200,
            render: (row:any)=>(
                <div className="m-1">
                    <img style={{ borderRadius:'50%'}} src={
                        row.photo.startsWith('http') ? row.photo:
                        `https://uptech-agro.herokuapp.com/${row.photo}`
                    } width={50} height={50}/>
                </div>
            )
        },
        {
            dataIndex:'',
            title:'*',
            renderCell:(params:any)=>(
                <div>
                    <Link to={`/editproduct/${params.row.id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deteleProduct(params.row.id)}  className="icon-delete"/>
                </div>
            )
        }
    ]
    
    return (
        <div className="other">
            <div className='p-5'>
                <div className="d-flex justify-content-around">
                    <h3 className="font-weight-bold">Our Products</h3>
                    <Link to='/addproduct'>Add product+</Link>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={isLoading}
                />
            </div>

        </div>
    )
}

export default Product
