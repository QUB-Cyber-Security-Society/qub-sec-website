import { CalendarMonth } from "@mui/icons-material";
import { Card, CardContent, Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

export type EventsContainerProps = {
    id: string;
    title: string;
    date: string;
    description: string;
    type: 'Workshop' | 'Competition' | 'Meeting' | 'Networking';
    index: number;
};

const EventsContainer = ({ id, title, date, description, type, index }: EventsContainerProps) => {
    const eventTypeColors = {
        Workshop: {
            backgroundColor: 'rgba(3, 169, 244, 0.2)',
            color: '#03a9f4',
            borderColor: 'rgba(3, 169, 244, 0.4)',
        },
        Competition: {
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            color: '#f44336',
            borderColor: 'rgba(244, 67, 54, 0.4)',
        },
        Networking: {
            backgroundColor: 'rgba(156, 39, 176, 0.2)',
            color: '#9c27b0',
            borderColor: 'rgba(156, 39, 176, 0.4)',
        },
        Meeting: {
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            color: '#4caf50',
            borderColor: 'rgba(76, 175, 80, 0.4)',
        },
    };

    return (
        <motion.div
            key={id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
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
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mb: 2,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ color: 'primary.main', fontFamily: 'monospace' }}
                        >
                            {title}
                        </Typography>
                        <Chip
                            label={type}
                            size="small"
                            sx={{
                                ...eventTypeColors[type],
                                fontFamily: 'monospace',
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                        <CalendarMonth sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                            {new Date(date).toLocaleDateString('en-GB', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default EventsContainer;