import { motion } from 'framer-motion';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Link,
} from '@mui/material';

export type SocialContainerProps = {
    name: string;
    icon: React.ElementType;
    url: string;
    description: string;
    color: string;
    index: number;
}

const SocialContainer = ({ name, icon: Icon, url, description, color, index }: SocialContainerProps) => {
    return (


        <motion.div
            key={name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
        >
            <Card
                sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(76, 175, 80, 0.3)',
                    transition: 'border-color 0.3s',
                    '&:hover': {
                        borderColor: 'rgba(76, 175, 80, 0.6)',
                    },
                }}
            >
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                                component={motion.div}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                sx={{
                                    color: color,
                                    transition: 'color 0.3s',
                                }}
                            >
                                {Icon && <Icon sx={{ fontSize: 40 }} />}
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: 'primary.main', fontFamily: 'monospace' }}
                                    >
                                        {name}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            component={Link}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                fontFamily: 'monospace',
                                '&:hover': {
                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                    borderColor: 'primary.main',
                                },
                            }}
                        >
                            VISIT
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default SocialContainer;