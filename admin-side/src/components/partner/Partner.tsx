import './Partner.css';
import { Link } from 'react-router-dom';
import { useGetPartnersQuery, useDeletePartnerMutation } from '../../slices/partnerSlice';
import {Table} from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Partner() {
    const {data=[], isLoading } = useGetPartnersQuery(); 
    const [deletePartner] = useDeletePartnerMutation()


    const columns = [
        {
            dataIndex:'id',
            title:'ID',
            width: 200
        },
        {
            dataIndex:'name',
            title:'Name',
            width: 200
        },
        {
            title:'Logo',
            width: 200,
            render: (row: any) => (
                <div>
                    <img style={{borderRadius:'50%'}} src={
                        row.logo.startsWith('http') ? row.logo:
                        `https://uptech-agro.herokuapp.com/${row.logo}`
                    } width={50} height={50}  alt="" />
                </div>
            )
        },
        {
            title:'*',
            width: 200,
            render:(row:any)=>(
                <div>
                    <Link to={`/editpartner/${row._id}`}>
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deletePartner(row._id)}  className="icon-delete"/>
                </div>
            )
        }
    ];
    return (
        <div className="other">
            <div className="p-4">
                <div className="d-flex justify-content-around">
                    <h3 className="font-weight-bold">Partners</h3>
                    <Link to='/addpartner'>Add Partner+</Link>
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

export default Partner
