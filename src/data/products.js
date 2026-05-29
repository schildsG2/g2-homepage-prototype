const favicon = (domain) =>
  `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

export const productsByCategory = {
  'Project Management': [
    { name: 'Jira', reviews: '7,810', rating: 4.2, logoUrl: favicon('atlassian.com') },
    { name: 'Asana', reviews: '13,677', rating: 4.4, logoUrl: favicon('asana.com') },
    { name: 'Smartsheet', reviews: '22,880', rating: 4.4, logoUrl: favicon('smartsheet.com') },
    { name: 'monday Work Management', reviews: '15,276', rating: 4.6, logoUrl: favicon('monday.com') },
    { name: 'Notion', reviews: '11,889', rating: 4.7, logoUrl: favicon('notion.so') },
    { name: 'ClickUp', reviews: '12,417', rating: 4.5, logoUrl: favicon('clickup.com') },
    { name: 'Airtable', reviews: '3,269', rating: 4.6, logoUrl: favicon('airtable.com') },
    { name: 'Wrike', reviews: '4,330', rating: 4.2, logoUrl: favicon('wrike.com') },
    { name: 'Quickbase', reviews: '1,530', rating: 4.4, logoUrl: favicon('quickbase.com') },
  ],
};
