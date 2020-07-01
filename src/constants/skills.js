
export const skills = {
    'Front End': {
        Basics: [
            'HTML', 'CSS', 'Javascript'
        ],
        Frameworks: [
            {
                name: 'React.js',
                color: 'primary',
                sub: ['Typescript', 'Redux', 'Context API', 'Hooks', 'Mobx']
            },
            {
                name: 'Angular',
                color: 'danger',
                sub: ['RxJS', 'ngbootstrap', 'Typescript']
            },
            {
                name: 'jQuery',
            }
        ],
        Styles: [
            'Boostrap 4', 'Semantic UI', 'Styled Components (React)', 'Tailwind CSS'
        ],
        Others: [
            'Flexbox', 'Grid', 'WebRTC'
        ]
    },
    'Back End': {
        Technologies: [
            {
                name: 'PHP',
                color: 'secondary',
                sub: ['Codeigniter']
            },
            {
                name: 'Node JS',
                color: 'dark',
                sub: ['Express.js', 'jwt', 'Passport', 'Typeorm', 'Typescript', 'socket.io']
            }
        ],
    },
    'Database': {
        RDBMS: [
            {
                name: 'mySQL',
            },
            {
                name: 'Postgres',
            }
        ],
        NoSQL: [
            {
                name: 'Mongo',
            },
            {
                name: 'Firebase',
                sub: ['Firestore', 'Realtime Database']
            }
        ],
    },
    'DEV OPS': {
        Infrastructure: [
            {
                name: 'NGINX',
                sub: ['Reverse Proxy', 'Issuing SSL Certificate', 'Certbot']
            },
            {
                name: 'Amazon Web Services',
                color: 'warning',
                sub: ['EC2', 'Cloudfront', 'S3', 'SES', 'Lightsail', 'API Gateway', 'RDS', 'Lambda']
            }
        ],
    },
    'Mobile Development': {
        Android: [
            {
                name: 'Java',
                sub: ['Android Studio']
            },
            {
                name: 'Cross Platform',
                color: 'success',
                sub: ['React Native', 'Flutter', 'PWA']
            }
        ],
    }
}
