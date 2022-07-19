import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import { useEditImpactMutation, useGetImpactQuery } from '../../slices/impactSlice';


function EditImpact() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    const { id }: { id: string } = useParams();

    const { data, isLoading } = useGetImpactQuery(id);
    const [editImpact, { isSuccess }] = useEditImpactMutation();

    const history = useHistory();

    // handle onchange
    const onChangeTitle = (e: any) => setTitle(e.target.value);
    const onChangeDescription = (e: any) => setDescription(e.target.value);
    const onChangePhoto = (e: any) => setPhoto(e.target.files[0])

    useEffect(()=>{
        if(!isLoading){
            setTitle(`${data?.title}`)
            setDescription(`${data?.description}`)
        }
    },[isLoading, data])

    const onSubmit = (e:any) => {
        e.preventDefault();
        const format = new FormData();
        format.append('title', title);
        format.append('description', description);
        format.append('_id', id);
        editImpact(format);
    };

    useEffect(() => {
        (() => {
            if (isSuccess) {
                setTitle('');
                setDescription('');
                setPhoto('');
                history.push('/impact');
            }
        })();
    }, [isSuccess, history]);
    

    return (
        <div className="other">
            <div className="p-4">
                <h3 className="font-weight-bold text-center">Edit Impact</h3>
                {
                    isLoading ? (
                        <h3>Loading ....</h3>
                    ) : data ? (
                        <div className="card p-2">
                            <form onSubmit={onSubmit} className="form">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        value={title}
                                        onChange={onChangeTitle}
                                        type="text"
                                        placeholder="title"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        placeholder="description"
                                        className="form-control"
                                        value={description}
                                        onChange={onChangeDescription}
                                        cols={30} rows={10}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="file" accept=".png, .jpeg, .jpg" onChange={onChangePhoto} />
                                </div>
                                <button type="submit" className="btn btn-secondary rounded mr-2">edit</button>
                                <Link className="btn btn-info rounded" to="/impact">cancel</Link>
                            </form>
                        </div>
                    ) : null
                }

            </div>
        </div>
    )
}

export default EditImpact
