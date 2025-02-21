const DetailUserPage = (props: any) => {
    const { params } = props;
    return (
        <div>
            slug = {params?.id}
        </div>
    );
};
export default DetailUserPage;