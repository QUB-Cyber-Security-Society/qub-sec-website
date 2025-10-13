import { styled } from "@mui/material/styles";
import { Grid, Card, CardContent, Box, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";

export type MemberProps = {
    name: string;
    role: string;
    image: string;
    funFact: string;
    index: number;
};

const CommitteeContainer = (member: MemberProps) => {
    const MotionBox = styled(motion.div)({});

    return (
        <Grid
            key={member.name}
            sx={{
                flex: { xs: 1, sm: 1, md: "1 1 calc(33.333% - 32px)" },
                minWidth: 0,
            }}
        >
            <MotionBox
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: member.index * 0.1 }}
                viewport={{ once: true }}
            >
                <Card sx={{ position: "relative", overflow: "hidden", minHeight: 400 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ position: "relative", mb: 4, display: "flex", justifyContent: "center" }}>
                            <Avatar
                                src={member.image}
                                alt={member.name}
                                sx={{ width: 100, height: 100 }}
                            />
                        </Box>

                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                {member.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ mb: 3 }}>
                                {member.role.toUpperCase()}
                            </Typography>
                        </Box>
                    </CardContent>

                    <Box
                        sx={(theme) => ({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: "rgba(0, 0, 0, 0.9)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: 3,
                            opacity: 0,
                            transition: theme.transitions.create("opacity", {
                                duration: theme.transitions.duration.short,
                            }),
                            "&:hover": {
                                opacity: 1,
                            },
                        })}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: "italic",
                                textAlign: "center",
                                fontSize: "1.1rem",
                                lineHeight: 1.6,
                                color: "#fff",
                            }}
                        >
                            "{member.funFact}"
                        </Typography>
                    </Box>
                </Card>
            </MotionBox>
        </Grid>
    );
};

export default CommitteeContainer;
