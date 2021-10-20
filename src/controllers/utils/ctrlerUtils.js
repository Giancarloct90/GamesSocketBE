import cloudinary from 'cloudinary';
import fs from 'fs-extra';

cloudinary.config({
    cloud_name: 'ddnzwfrmo',
    api_key: '751465344374982',
    api_secret: 'MNMtnqvFuL4XBiRu5LLXPtxygEA'
});

export const uploadImage = async (image) => {
    try {
        var imageUpload = await cloudinary.v2.uploader.upload(image);
        await fs.unlink(image);
        return {
            ok: true,
            imageUpload
        };
    } catch (e) {
        console.log('Error Trying to upload img');
        return {
            ok: false
        };
    }
}