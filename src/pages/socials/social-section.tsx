import { motion } from 'framer-motion';
import {
    Instagram,
    LinkedIn,
    Mail,
    OpenInNew,
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
import SocialContainer from '../../components/socials/social-container';
import DiscordIcon from '../../components/icons/DiscordIcon';
import type { SocialLink } from '../../types/types';

const SocialSection = () => {
    const socialLinks: SocialLink[] = [
        {
            name: 'Discord',
            icon: DiscordIcon,
            url: 'https://discord.com/invite/tBnbC2egUX',
            description: 'Join our Discord server for real-time updates and discussions',
            color: '#5865F2'
        },
        {
            name: 'LinkedIn',
            icon: LinkedIn,
            url: 'https://www.linkedin.com/company/qub-cyber-security-society/',
            description: 'Connect with our professional network',
            color: '#1e88e5'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/qubcybersecsoc/',
            description: 'Behind the scenes of our cyber adventures',
            color: '#e91e63'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:contact@cybersecurity-society@qub.ac.uk',
            description: 'Get in touch with our team directly',
            color: '#66bb6a'
        },
    ];
    return (
            <Grid>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
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
                        <OpenInNew sx={{ mr: 1, fontSize: 32 }} />
                        SOCIAL_CHANNELS
                    </Typography>
                    <Box sx={{ display: 'grid', gap: 2 }}>
                        {socialLinks.map((social, index) => (
                            <SocialContainer
                                key={social.name}
                                name={social.name}
                                icon={social.icon}
                                url={social.url}
                                description={social.description}
                                color={social.color}
                                index={index}
                            />
                        ))}
                    </Box>
                </motion.div>
            </Grid>

    );
};

export default SocialSection;