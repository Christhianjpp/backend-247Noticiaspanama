


const uploadImage = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dwbpyxt4a/upload'

    const formData = new FormData()
    formData.append('upload_preset', '247NoticiasPanama')
    formData.append('file', file)
    formData.append('folder', '247NoticiasImg');

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
        if (resp.ok) {
            const cloudResp = await resp.json()
            return cloudResp.secure_url
        }

    } catch (error) {
        console.log(error)
        throw error
    }

}

export default uploadImage