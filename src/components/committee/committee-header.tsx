import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const CommitteeHeader = () => {
    const MotionBox = styled(motion.div)({});
    return (
        <MotionBox
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center', mb: 8 }}
        >
            <Typography variant="h2" sx={{ mb: 2 }}>
                {'< MEET_THE_COMMITTEE />'}
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '850px', mx: 'auto' }}>
                Our dedicated committee members are passionate about cybersecurity and committed to fostering a vibrant community.
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto' }}>
                Get to know the team driving our society forward!
            </Typography>
        </MotionBox>
    );
};

export default CommitteeHeader;