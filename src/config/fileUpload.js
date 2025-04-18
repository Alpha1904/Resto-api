const uploadConfig = {
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB
    },
    allowedTypes: [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp'
    ],
    uploadDir: 'public/uploads',
    tempFileDir: '/tmp/'
};

export default uploadConfig;