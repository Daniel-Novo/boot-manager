package com.ontimize.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("CVDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/CVDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class CVDao extends OntimizeJdbcDaoSupport {

	public static final String ATTR_ID = "ID";
	public static final String ATTR_STUDIES = "STUDIES";
	public static final String ATTR_EXPERIENCE = "EXPERIENCE";
	public static final String ATTR_LANGUAGES = "LANGUAGES";
	public static final String ATTR_PERSONAL_INF = "PERSONAL_INF";
	public static final String ATTR_SKILLS = "SKILLS";
	public static final String ATTR_CANDIDATE_ID = "CANDIDATE_ID";

}