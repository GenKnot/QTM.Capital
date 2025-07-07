interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  link: string;
  has_inner_dropdown?: boolean;
  inner_submenu?: InnerSubMenuItem[];
}

interface InnerSubMenuItem {
  title: string;
  link: string;
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "首页",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Xpend咨询",
    link: "/quantum-consulting",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Xpend资本",
    link: "/xpend-capital",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "产业并购",
    link: "/industrial-mergers",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Xpend合伙人",
    link: "/quantum-partners",
    has_dropdown: false,
  },
]

export default menu_data