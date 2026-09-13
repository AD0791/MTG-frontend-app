import {defineRecipe} from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
    base:{
        minH:"44px",
        fontWeight:"semibold",
    },
    variants:{
        variant:{
            primary:{
                bg:"accent.dim",
                color:"fg",
                borderColor:"accent",
                _hover:{
                    bg:"accent",
                    color:"bg",
                }
            },
            quiet:{
                bg:"bg..muted",
                color:"fg",
                borderColor:"fg.muted",
                _hover:{bg:"border"}
            },
            suggest:{
                bg:"bg.muted",
                color:"fg",
                borderColor:"accent",
                _hover:{bg:"accent.dim"}
            },
            danger:{
                bg:"transparent",
                color:"band.danger",
                borderColor:"band.danger",
                _hover:{bg:"band.danger", color:"bg"}
            },
        },
    },
    defaultVariants:{
        variant:"primary",
    },
});
