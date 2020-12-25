import { gql } from '@apollo/client';
import MenuFragment from './fragments/menus';

const GET_MENU = gql`
    query GET_MENUS {
        headerMenus: menuItems(where: { location: HCMS_MENU_HEADER, parentId: "0" }) {
            edges {
                node {
                    ...MenuFragment
                    childItems {
                        edges {
                            node {
                                ...MenuFragment
                            }
                        }
                    }
                }
            }
        }
        footerMenus: menuItems(where: { location: HCMS_MENU_FOOTER, parentId: "0" }) {
            edges {
                node {
                    ...MenuFragment
                }
            }
        }
    }
    ${MenuFragment}
`;

export default GET_MENU;
