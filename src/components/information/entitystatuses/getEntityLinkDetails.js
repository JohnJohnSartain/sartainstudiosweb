const getEntityLinkDetails = (entity) =>
    entity.linkDetails.filter(x =>
        x.linkIcon.includes('fas fa-sitemap')
        || x.linkIcon.includes('fab fa-weebly')
        || x.linkIcon.includes('fas fa-money-bill-wave')
        || x.linkIcon.includes('fas fa-clock')
        || x.linkIcon.includes('fas fa-users')
        || x.linkIcon.includes('fa fa-tasks'))[0];

export default getEntityLinkDetails;