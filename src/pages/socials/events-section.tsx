import { motion } from 'framer-motion';
import {
  CalendarMonth,
} from '@mui/icons-material';
import {
  Box,
  Typography,
} from '@mui/material';
import events from  '../../events.json';
import EventsContainer from '../../components/events/events-container';
import type { Event } from '../../types/types';

const EventsSection = () => {
    const upcomingEvents: Event[] = (events as Event[])
      //.filter(event => new Date(event.date) >= new Date()) - could be used to filter out past events
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: 'primary.main',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <CalendarMonth sx={{ mr: 1, fontSize: 32 }} />
                UPCOMING_EVENTS
            </Typography>
            <Box sx={{ display: 'grid', gap: 2 }}>
                {upcomingEvents.map((event, index) => (
                    <EventsContainer
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                        type={event.type}
                        index={index}
                    />
                ))}
            </Box>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
            </motion.div>
        </motion.div>
    );
};

export default EventsSection;